export const GIT_TS = [
  {
    question: '',
    response: [
      `It is a tool that keeps a history of changes to a project and allows many people to work on code simultaneously without interfering with each other.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Why is control version used?',
    response: [
      `History preservation:
        If you break the code → you can roll back to a stable version.
        Teamwork:
        Several developers can work on the same files.
        Merge conflicts are resolved automatically or manually.
        Experiments (branches):
        You can create separate branches for features, bug fixes, experiments.
        When ready, merge into the main branch (merge).
        Responsibility tracking:
        It is easy to see who made changes and why (through a comment on the commit).
        CI/CD integration:
        Version control systems integrate with pipelines for automated testing, deployment, and review.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Basic commands',
    response: [
      `git init — create a new local repository.
        git clone <url> — copy a remote repository to yourself.
        git status — view the status of files (changed, staged, untracked).
        git add <file> — add file(s) to the staging area for the next commit.
        git commit -m "msg" — commit changes to history with a message.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Work with history commands.',
    response: [
      `git log — show commit history.
        git diff — difference between working directory and last commit (or between commits).
        git blame <file> — show who changed each line and when.
        git show <commit> — details of a specific commit.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Work with branches commands.',
    response: [
      `git branch — show a list of branches.
        git branch <name> — create a new branch.
        git checkout <branch> — switch to a branch (in new versions, git switch is better).
        git switch -c <branch> — create and switch.
        git merge <branch> — merge changes from another branch into the current one.
        git rebase <branch> — “rewrite” the history so that the commits are on top of the other branch.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Interacting with a remote repository commands.',
    response: [
      `git remote -v — show connected remote repositories.
        git fetch — fetch new commits from remote (but do not merge).
        git pull — fetch + merge.
        git push — push your commits to remote.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Corrections and cancellations commands',
    response: [
      `git reset — roll back indexing or commits (may change history).
        git revert <commit> — create a new commit that reverses the specified one.
        git checkout -- <file> — restore a file from the last commit.
        git stash — temporarily hide uncommitted changes.
        git stash pop — restore hidden changes.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Tags and releases commands.',
    response: [
      `git tag <name> — create a tag (for example, version v1.0.0).
        git push origin <tag> — push a tag to the remote.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Advanced (often in production) commands',
    response: [
      `git cherry-pick <commit> — apply a specific commit in the current branch.
        git reflog — history of all actions (you can save "lost" commits).
        git bisect — search for the commit where the bug appeared (binary search through history).`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is the difference between git merge and git rebase?',
    response: [
      `merge → keeps the full history (safe, but history is branched).
        rebase → makes the history clean and linear (but changes commit hashes).`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is a commit in Git?',
    response: [
      `This is a commit to the repository. Essentially, a commit is a snapshot of all the files that have been added to the staging area (git add).`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to properly shape git commit?',
    response: [
      `One commit = one logical change.
        Message = short, clear, imperative.
        Review changes before committing.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to fix errors in previous commits?',
    response: [
      `Latest local commit -> git commit --amend.
        One of several local commits -> git rebase -i HEAD~N + edit.
        Commit already pushed -> Additional "fix" commit or forced push (dangerous).`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are branches in Git?',
    response: [
      `This is a commit pointer that allows you to develop different versions of a project in parallel. In effect, it is a lightweight copy of history where you can make changes without affecting the main branch (usually main or master).`,
    ],
    fullResponse: '',
  },
  {
    question: 'How effective use branches in Git?',
    response: [
      `One branch = one logical task.
        For example, feature/login, bugfix/checkout, hotfix/security.
        Easier to track changes and code reviews.
        Pull often before merge/rebase
        To avoid conflicts.
        Merge branches correctly
        merge → preserves branch history, convenient for shared repositories.
        rebase → linear history, convenient for local features before PR.
        Delete old branches
        Locally and remotely (git push origin --delete <branch>) to keep the repository clutter-free.
        Use template names:
        feature/<name>, bugfix/<name>, hotfix/<name>, release/<number>.
        Helps organize work and CI/CD pipelines.`,
            ],
    fullResponse: '',
  },
  {
    question: 'How to create a new branch in Git?',
    response: [
      `git branch feature/login, git checkout -b feature/login, git switch -c feature/login.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What branch selection strategies are used in different development processes (e.g. Git Flow)?',
    response: [
      `GitHub Flow, GitLab Flow, Trunk-Based Development.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is a merge conflict?',
    response: [
      `occurs when Git cannot automatically merge changes from two branches because they change the same line in the file or adjacent lines in such a way that the system cannot decide which version is correct.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to solve merge conflict?',
    response: [
      `Open the file and select the correct version:
        You can keep one of the versions or merge the changes manually.
        After editing, remove all <<<<<<<, =======, >>>>>>>.
        Add the corrected file to staging.
        Continue merging or rebase.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the best practices for working with remote repositories?',
    response: [
      `Regularly synchronize with remote, Use branches for all changes, Stick to clear branch names, Use Pull/Merge Requests, Write informative commits, Be careful with force pushes, Tags and releases, Regularly clean branches, Use CI/CD integration, Document workflow.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to use a .gitignore file?',
    response: [
      `is used to ignore certain files or folders from being included in commits and the remote repository. This is especially important for temporary files, secrets, or large build artifacts.`,
    ],
    fullResponse: '',
  },
];