module.exports = {
	globDirectory: 'webpage/',
	globPatterns: ['**/*.{html,css}', '**/scripts/*.js'],
	swDest: 'webpage/sw.js',
	cleanupOutdatedCaches: true,
	runtimeCaching: [
		{
			urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
			handler: 'CacheFirst',
			options: {
				cacheName: 'images',
				expiration: {
					maxEntries: 18,
				},
			},
		},
	],
};
