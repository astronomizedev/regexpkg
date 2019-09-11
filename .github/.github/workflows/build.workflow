workflow "publish on release" {
  resolves = ["publish"]
  on = "push"
}

action "publish" {
  uses = "actions/npm@master"
  args = "publish"
  secrets = ["NPM_AUTH_TOKEN"]
}
