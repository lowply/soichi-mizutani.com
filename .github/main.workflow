workflow "Deploy" {
  on = "push"
  resolves = ["Deploy to Firebase"]
}

action "Build Hugo" {
  uses = "lowply/build-hugo@master"
  runs = "hugo"
}

action "Deploy to Firebase" {
  uses = "lowply/deploy-firebase@master"
  needs = ["Build Hugo"]
  secrets = ["FIREBASE_TOKEN"]
}
