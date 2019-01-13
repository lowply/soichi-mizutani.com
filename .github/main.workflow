workflow "Deploy" {
  on = "push"
  resolves = ["Deploy to Firebase"]
}

action "Build Hugo" {
  uses = "lowply/actions-hugo-firebase/build-hugo@master"
  runs = "hugo"
}

action "Deploy to Firebase" {
  uses = "lowply/actions-hugo-firebase/deploy-firebase@master"
  needs = ["Build Hugo"]
  secrets = ["FIREBASE_TOKEN"]
}
