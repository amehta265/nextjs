import cypress from 'cypress';

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Get selected sites from request body
    const args = req.body
    let spec = []
    let screens = []
    if (args.length === 0) {
      console.log("No parameters");
      // push specific spec file in a array to run those tests
      spec.push('./cypress/e2e')
    } else {
      console.log("Parameters found");
      for (const arg of args) {
        spec.push('./cypress/e2e/' + arg)
        // Screenshots will be saved in cypress/screenshots folder with the name of the spec file
        screens.push('./cypress/screenshots/' + arg + "/")
      }
    }

    if (spec.length !== 0) {
      console.log('Run cypres for: ' + args);
      console.log('Screenshot directories: ' + screens);
      cypress.run({
        // the path is relative to the current working directory
        spec: spec,
      }).then((results) => {
        console.log(results);
        return res.status(200).json({
          status: "Completed"
        });
      })
        .catch((err) => {
          console.error(err)
        })
    } else {
      return null
    }
  }
}
