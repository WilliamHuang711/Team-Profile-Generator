const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(GitHubUser) {
        super(GitHubUser)

        this.GitHubUser = GitHubUser;
    }


    getGithub() {
        return this.GitHubUser;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;