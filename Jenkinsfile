#!groovy

node('docker'){
    checkout scm

    def channel  = 'integrations-testing'
    def app_name = 'developer_documentation'

    withCredentials([[$class: 'FileBinding', credentialsId: '31ccb6e3-1905-4ea5-918f-d3686a7537c0', variable: 'KEY_FILE']]) {
        def docker_container = docker.build( app_name )
        docker_container.inside {
            notifySlack("${app_name} build and publish starting!", channel)

            stage 'Publish'
            sh 'sudo bundle install'
            sh "sudo GIT_SSH_COMMAND='ssh -i $KEY_FILE' rake publish --trace"

            notifySlack("${app_name} publish finished!", channel)
        }
    }
}
