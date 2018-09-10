const path = require('path');
const webpack = require("webpack");

module.exports = {
    entry: {
        "example": [path.join(__dirname, 'example.js')]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].min.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.js', ".c", ".wasm"]
    },
    optimization: {
		// minimize: false
	},
    module: {
        rules: [{
            test: /\.wasm$/,
            use: {
                loader: path.resolve('../index.js'),
                options: {
                    // emitWasm: true, // emit WASM file built by emscripten to the build folder
                    // emccFlags: (existingFlags) => existingFlags.concat(["more", "flags", "here"]), // add or modify compiler flags
                    // emccPath: "path/to/emcc", // only needed if emcc is not in PATH,
                    memoryClass: true, // disable javascript memory management class,
                    fetchFiles: true
                    // asmJs: true,
                    // wasm: false,
                    // fullEnv: true
                }
            }
        }]
    }
};