#!groovy

node('docker'){
    checkout scm

    def channel  = 'integrations-testing'
    def app_name = 'DeveloperDocumentation'

    def docker_container = docker.build( app_name )
    docker_container.inside {
        notifySlack("${app_name} build and publish starting!", channel)

        stage 'Publish'
        sh 'bundle install'
        sh 'rake build --trace'

        notifySlack("${app_name} build and publish finished!", channel)
    }
}
