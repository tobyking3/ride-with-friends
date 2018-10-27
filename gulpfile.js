import gulp from 'gulp'
import chalk from 'chalk'

// log a message
gulp.task('message', () => {
    console.log(chalk.green("Starting server on port 8080..."))
})
