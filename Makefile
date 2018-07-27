# 
export PATH := node_modules/.bin:$(PATH)

dev:
	cross-env NODE_ENV=development budo src/main.js:build.js -H 127.0.0.1 -o -l

build: 
	cross-env NODE_ENV=production browserify -p common-shakeify src/main.js -o build.js
	uglifyjs build.js --compress > docs/build.js
	cp index.html docs/index.html
	rm -rf build.js # sanity

publish: 
	npm run build
	git add .
	git commit -m "prepare release"
	npm version minor
	TAG := node -e "console.log(require('./package.json').version);"
	git tag $(TAG)
	git push origin master
	git push origin $(TAG) 