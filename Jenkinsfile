#!groovy
import groovy.json.JsonSlurper

node('docker'){
    checkout scm

    def payload_obj     = new JsonSlurper().parseText(payload)
    def push_branch_ref = payload_obj.ref
    print push_branch_ref
    def channel         = 'integrations-testing'
    def app_name        = 'developer_documentation'
    payload_obj         = null

    if( push_branch_ref == 'refs/heads/master' ){
        withCredentials([[$class: 'FileBinding', credentialsId: '31ccb6e3-1905-4ea5-918f-d3686a7537c0', variable: 'KEY_FILE']]) {
            def docker_container = docker.build( app_name )
            docker_container.inside {
                notifySlack("${app_name} build and publish starting!", channel)

                stage 'Publish'
                sh 'sudo bundle install'
                sh 'if [ -d "build" ]; then sudo rm -rf "build"; fi'
                // echo "sudo GIT_SSH_COMMAND='ssh -i \$KEY_FILE' rake publish --trace"
                // sh "sudo GIT_SSH_COMMAND='ssh -i \$KEY_FILE' rake publish --trace"
                sshagent (credentials: ['8550b216-2b35-4a37-be2f-1d0190198db4']) {
                    sh "rake publish --trace"
                }

                notifySlack("${app_name} publish finished!", channel)
            }
        }
    }
    else{
        notifySlack("${app_name} non-master change pushed.", channel)
    }
}
