install:
	npm ci
brain-games:
	node bin/runBrainGames.js
brain-gcd:
	node bin/runBrainGcd.js
brain-even:
	node bin/runBrainEven.js
brain-prime:
	node bin/runBrainPrime.js
brain-progression:
	node bin/runBrainProgression.js
brain-calc:
	node bin/runBrainCalc.js
publish:
	npm publish --dry-run
lint:
	npx eslint .