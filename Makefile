
new-patch:
	npm run build; \
	git add .; \
	git commit -m "new patch"; \
	git push -u origin main; \
	npm version patch --no-git-tag-version; \
	npm publish