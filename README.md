# ES2015 and beyond - workshop

The exercises are in the `exercises` directory. Each exercise is in a separate directory.

## Testing

To test if your solution is working, run:

```sh
npx jest exercises/[exercise name here]
```

e.g.

```sh
npx jest exercises/01-bare-class
```

and look at the results.

### Running tests in _watch_ mode

If you are working on a single problem and want to run the tests after every change, run:

```sh
npx jest exercises/[exercise name here] --watch
```

e.g.

```sh
npx jest exercises/01-bare-class --watch
```

## Solutions

The solutions are available on the `solutions` branch.

You can look at the solution either on GitHub using their UI, or by checking out that branch:

```sh
git stash
git checkout solutions
```

After looking at the solution, use:

```sh
git checkout master
git stash pop
```

to restore your work.

## Author

The author of this workshop is Grzegorz Rozdzialik.
