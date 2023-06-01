"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "formidable-serverless":
/*!****************************************!*\
  !*** external "formidable-serverless" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("formidable-serverless");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/upload.js":
/*!*****************************!*\
  !*** ./pages/api/upload.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formidable_serverless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formidable-serverless */ \"formidable-serverless\");\n/* harmony import */ var formidable_serverless__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formidable_serverless__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst s3 = new (aws_sdk__WEBPACK_IMPORTED_MODULE_0___default().S3)({\n    region: \"ap-south-1\",\n    credentials: {\n        accessKeyId: process.env.S3_ACCESS_KEY,\n        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY\n    }\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const form = new (formidable_serverless__WEBPACK_IMPORTED_MODULE_1___default().IncomingForm)();\n        // parse the incoming form data\n        form.parse(req, async (err, fields, files)=>{\n            if (err) {\n                console.error(err);\n                res.status(500).json({\n                    error: \"Server error\"\n                });\n                return;\n            }\n            // get the video file from the incoming form data\n            const video = files.video;\n            // read the contents of the file\n            const fileContent = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(video.path);\n            // Upload the file to S3\n            const putObjectParams = {\n                Bucket: \"evm-rohit-next-bucket\",\n                Key: video.name,\n                Body: fileContent,\n                ContentType: video.type\n            };\n            await s3.putObject(putObjectParams).promise();\n            // Log the file information to the console\n            console.log(`File uploaded to S3: ${video.name} (${video.type})`);\n            res.status(200).json({\n                message: \"File uploaded successfully!\"\n            });\n        });\n    } else {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3FCO0FBQzNCO0FBRXBCLE1BQU1HLEtBQUssSUFBSUgsbURBQU0sQ0FBQztJQUNwQkssUUFBUTtJQUNSQyxhQUFhO1FBQ1hDLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtRQUN0Q0MsaUJBQWlCSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtJQUNuRDtBQUNGO0FBRU8sTUFBTUMsU0FBUztJQUNwQkMsS0FBSztRQUNIQyxZQUFZLEtBQUs7SUFDbkI7QUFDRixFQUFFO0FBRWEsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTUMsT0FBTyxJQUFJbkIsMkVBQXVCO1FBRXhDLCtCQUErQjtRQUMvQm1CLEtBQUtFLEtBQUssQ0FBQ0wsS0FBSyxPQUFPTSxLQUFLQyxRQUFRQyxRQUFVO1lBQzVDLElBQUlGLEtBQUs7Z0JBQ1BHLFFBQVFDLEtBQUssQ0FBQ0o7Z0JBQ2RMLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVGLE9BQU87Z0JBQWU7Z0JBQzdDO1lBQ0YsQ0FBQztZQUVELGlEQUFpRDtZQUNqRCxNQUFNRyxRQUFRTCxNQUFNSyxLQUFLO1lBRXpCLGdDQUFnQztZQUNoQyxNQUFNQyxjQUFjN0Isc0RBQWUsQ0FBQzRCLE1BQU1HLElBQUk7WUFFOUMsd0JBQXdCO1lBQ3hCLE1BQU1DLGtCQUFrQjtnQkFDdEJDLFFBQVE7Z0JBQ1JDLEtBQUtOLE1BQU1PLElBQUk7Z0JBQ2ZDLE1BQU1QO2dCQUNOUSxhQUFhVCxNQUFNVSxJQUFJO1lBQ3pCO1lBQ0EsTUFBTXJDLEdBQUdzQyxTQUFTLENBQUNQLGlCQUFpQlEsT0FBTztZQUUzQywwQ0FBMEM7WUFDMUNoQixRQUFRaUIsR0FBRyxDQUFDLENBQUMscUJBQXFCLEVBQUViLE1BQU1PLElBQUksQ0FBQyxFQUFFLEVBQUVQLE1BQU1VLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFaEV0QixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFZSxTQUFTO1lBQThCO1FBQ2hFO0lBQ0YsT0FBTztRQUNMMUIsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFRixPQUFPO1FBQXFCO0lBQ3JELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluYWxwcm9qZWN0MTZhcHIvLi9wYWdlcy9hcGkvdXBsb2FkLmpzPzU1NzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFXUyBmcm9tIFwiYXdzLXNka1wiO1xuaW1wb3J0IGZvcm1pZGFibGUgZnJvbSBcImZvcm1pZGFibGUtc2VydmVybGVzc1wiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5jb25zdCBzMyA9IG5ldyBBV1MuUzMoe1xuICByZWdpb246IFwiYXAtc291dGgtMVwiLFxuICBjcmVkZW50aWFsczoge1xuICAgIGFjY2Vzc0tleUlkOiBwcm9jZXNzLmVudi5TM19BQ0NFU1NfS0VZLFxuICAgIHNlY3JldEFjY2Vzc0tleTogcHJvY2Vzcy5lbnYuUzNfU0VDUkVUX0FDQ0VTU19LRVksXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYm9keVBhcnNlcjogZmFsc2UsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IGZvcm0gPSBuZXcgZm9ybWlkYWJsZS5JbmNvbWluZ0Zvcm0oKTtcblxuICAgIC8vIHBhcnNlIHRoZSBpbmNvbWluZyBmb3JtIGRhdGFcbiAgICBmb3JtLnBhcnNlKHJlcSwgYXN5bmMgKGVyciwgZmllbGRzLCBmaWxlcykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiU2VydmVyIGVycm9yXCIgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gZ2V0IHRoZSB2aWRlbyBmaWxlIGZyb20gdGhlIGluY29taW5nIGZvcm0gZGF0YVxuICAgICAgY29uc3QgdmlkZW8gPSBmaWxlcy52aWRlbztcblxuICAgICAgLy8gcmVhZCB0aGUgY29udGVudHMgb2YgdGhlIGZpbGVcbiAgICAgIGNvbnN0IGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKHZpZGVvLnBhdGgpO1xuXG4gICAgICAvLyBVcGxvYWQgdGhlIGZpbGUgdG8gUzNcbiAgICAgIGNvbnN0IHB1dE9iamVjdFBhcmFtcyA9IHtcbiAgICAgICAgQnVja2V0OiBcImV2bS1yb2hpdC1uZXh0LWJ1Y2tldFwiLFxuICAgICAgICBLZXk6IHZpZGVvLm5hbWUsXG4gICAgICAgIEJvZHk6IGZpbGVDb250ZW50LFxuICAgICAgICBDb250ZW50VHlwZTogdmlkZW8udHlwZSxcbiAgICAgIH07XG4gICAgICBhd2FpdCBzMy5wdXRPYmplY3QocHV0T2JqZWN0UGFyYW1zKS5wcm9taXNlKCk7XG5cbiAgICAgIC8vIExvZyB0aGUgZmlsZSBpbmZvcm1hdGlvbiB0byB0aGUgY29uc29sZVxuICAgICAgY29uc29sZS5sb2coYEZpbGUgdXBsb2FkZWQgdG8gUzM6ICR7dmlkZW8ubmFtZX0gKCR7dmlkZW8udHlwZX0pYCk7XG5cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJGaWxlIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseSFcIiB9KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiBcIk1ldGhvZCBub3QgYWxsb3dlZFwiIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbIkFXUyIsImZvcm1pZGFibGUiLCJmcyIsInMzIiwiUzMiLCJyZWdpb24iLCJjcmVkZW50aWFscyIsImFjY2Vzc0tleUlkIiwicHJvY2VzcyIsImVudiIsIlMzX0FDQ0VTU19LRVkiLCJzZWNyZXRBY2Nlc3NLZXkiLCJTM19TRUNSRVRfQUNDRVNTX0tFWSIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZm9ybSIsIkluY29taW5nRm9ybSIsInBhcnNlIiwiZXJyIiwiZmllbGRzIiwiZmlsZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXMiLCJqc29uIiwidmlkZW8iLCJmaWxlQ29udGVudCIsInJlYWRGaWxlU3luYyIsInBhdGgiLCJwdXRPYmplY3RQYXJhbXMiLCJCdWNrZXQiLCJLZXkiLCJuYW1lIiwiQm9keSIsIkNvbnRlbnRUeXBlIiwidHlwZSIsInB1dE9iamVjdCIsInByb21pc2UiLCJsb2ciLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/upload.js"));
module.exports = __webpack_exports__;

})();