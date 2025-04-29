pipeline {
  agent any

  environment {
    NVM_DIR = "${HOME}/.nvm"
    NODE_VERSION = "22.12.0"
  }

  stages {

    stage('Setup Node') {
      steps {
        sh '''
          source $NVM_DIR/nvm.sh
          nvm use $NODE_VERSION
        '''
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Install Browsers') {
      steps {
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Clean Reports') {
      steps {
        sh 'rm -rf playwright-report*'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npx playwright test --reporter=html'
      }
    }

    stage('Archive Playwright Report') {
      steps {
        archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        publishHTML(target: [
          reportDir: 'playwright-report',
          reportFiles: 'index.html',
          reportName: 'Playwright HTML Report'
        ])
      }
    }
  }

  post {
    always {
      echo 'Pipeline finished.'
    }
  }
}
