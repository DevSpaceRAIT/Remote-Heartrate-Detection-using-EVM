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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formidable_serverless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formidable-serverless */ \"formidable-serverless\");\n/* harmony import */ var formidable_serverless__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formidable_serverless__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);\naxios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst s3 = new (aws_sdk__WEBPACK_IMPORTED_MODULE_0___default().S3)({\n    region: \"ap-south-1\",\n    credentials: {\n        accessKeyId: process.env.S3_ACCESS_KEY,\n        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY\n    }\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const form = new (formidable_serverless__WEBPACK_IMPORTED_MODULE_1___default().IncomingForm)();\n        // parse the incoming form data\n        form.parse(req, async (err, fields, files)=>{\n            if (err) {\n                console.error(err);\n                res.status(500).json({\n                    error: \"Server error\"\n                });\n                return;\n            }\n            // get the video file from the incoming form data\n            const video = files.video;\n            // read the contents of the file\n            const fileContent = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(video.path);\n            // Upload the file to S3\n            const putObjectParams = {\n                Bucket: \"evm-rohit-next-bucket\",\n                Key: video.name,\n                Body: fileContent,\n                ContentType: video.type\n            };\n            await s3.putObject(putObjectParams).promise().then(async ()=>{\n                console.log(`File uploaded to S3: ${video.name} (${video.type})`);\n                // send a POST request to the endpoint\n                try {\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"https://b988-117-220-211-114.ngrok-free.app/localnode\", {\n                        shouldTrigger: true\n                    });\n                    console.log(response.data);\n                    res.json(response.data);\n                } catch (error) {\n                    console.error(error);\n                    res.status(500).json({\n                        error: \"Internal Server Error\"\n                    });\n                }\n            }).catch((err)=>{\n                console.error(err);\n                res.status(500).json({\n                    error: \"Server error\"\n                });\n            });\n        });\n    } else {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNxQjtBQUMzQjtBQUNNO0FBRTFCLE1BQU1JLEtBQUssSUFBSUosbURBQU0sQ0FBQztJQUNwQk0sUUFBUTtJQUNSQyxhQUFhO1FBQ1hDLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtRQUN0Q0MsaUJBQWlCSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtJQUNuRDtBQUNGO0FBRU8sTUFBTUMsU0FBUztJQUNwQkMsS0FBSztRQUNIQyxZQUFZLEtBQUs7SUFDbkI7QUFDRixFQUFFO0FBRWEsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTUMsT0FBTyxJQUFJcEIsMkVBQXVCO1FBRXhDLCtCQUErQjtRQUMvQm9CLEtBQUtFLEtBQUssQ0FBQ0wsS0FBSyxPQUFPTSxLQUFLQyxRQUFRQyxRQUFVO1lBQzVDLElBQUlGLEtBQUs7Z0JBQ1BHLFFBQVFDLEtBQUssQ0FBQ0o7Z0JBQ2RMLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVGLE9BQU87Z0JBQWU7Z0JBQzdDO1lBQ0YsQ0FBQztZQUVELGlEQUFpRDtZQUNqRCxNQUFNRyxRQUFRTCxNQUFNSyxLQUFLO1lBRXpCLGdDQUFnQztZQUNoQyxNQUFNQyxjQUFjOUIsc0RBQWUsQ0FBQzZCLE1BQU1HLElBQUk7WUFFOUMsd0JBQXdCO1lBQ3hCLE1BQU1DLGtCQUFrQjtnQkFDdEJDLFFBQVE7Z0JBQ1JDLEtBQUtOLE1BQU1PLElBQUk7Z0JBQ2ZDLE1BQU1QO2dCQUNOUSxhQUFhVCxNQUFNVSxJQUFJO1lBQ3pCO1lBQ0EsTUFBTXJDLEdBQUdzQyxTQUFTLENBQUNQLGlCQUFpQlEsT0FBTyxHQUN4Q0MsSUFBSSxDQUFDLFVBQVc7Z0JBQ2ZqQixRQUFRa0IsR0FBRyxDQUFDLENBQUMscUJBQXFCLEVBQUVkLE1BQU1PLElBQUksQ0FBQyxFQUFFLEVBQUVQLE1BQU1VLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLHNDQUFzQztnQkFDdEMsSUFBSTtvQkFDRixNQUFNSyxXQUFXLE1BQU0zQyxrREFBVSxDQUFDLHlEQUF5RDt3QkFDekY2QyxlQUFlLElBQUk7b0JBQ3JCO29CQUNBckIsUUFBUWtCLEdBQUcsQ0FBQ0MsU0FBU0csSUFBSTtvQkFDekI5QixJQUFJVyxJQUFJLENBQUNnQixTQUFTRyxJQUFJO2dCQUN4QixFQUFFLE9BQU9yQixPQUFPO29CQUNkRCxRQUFRQyxLQUFLLENBQUNBO29CQUNkVCxJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUFFRixPQUFPO29CQUF3QjtnQkFDeEQ7WUFDRixHQUNDc0IsS0FBSyxDQUFDLENBQUMxQixNQUFRO2dCQUNkRyxRQUFRQyxLQUFLLENBQUNKO2dCQUNkTCxJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFRixPQUFPO2dCQUFlO1lBQy9DO1FBQ0o7SUFDRixPQUFPO1FBQ0xULElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUYsT0FBTztRQUFxQjtJQUNyRCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbmFscHJvamVjdDE2YXByLy4vcGFnZXMvYXBpL3VwbG9hZC5qcz81NTcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBV1MgZnJvbSBcImF3cy1zZGtcIjtcbmltcG9ydCBmb3JtaWRhYmxlIGZyb20gXCJmb3JtaWRhYmxlLXNlcnZlcmxlc3NcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgczMgPSBuZXcgQVdTLlMzKHtcbiAgcmVnaW9uOiBcImFwLXNvdXRoLTFcIixcbiAgY3JlZGVudGlhbHM6IHtcbiAgICBhY2Nlc3NLZXlJZDogcHJvY2Vzcy5lbnYuUzNfQUNDRVNTX0tFWSxcbiAgICBzZWNyZXRBY2Nlc3NLZXk6IHByb2Nlc3MuZW52LlMzX1NFQ1JFVF9BQ0NFU1NfS0VZLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaToge1xuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCBmb3JtID0gbmV3IGZvcm1pZGFibGUuSW5jb21pbmdGb3JtKCk7XG5cbiAgICAvLyBwYXJzZSB0aGUgaW5jb21pbmcgZm9ybSBkYXRhXG4gICAgZm9ybS5wYXJzZShyZXEsIGFzeW5jIChlcnIsIGZpZWxkcywgZmlsZXMpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIlNlcnZlciBlcnJvclwiIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGdldCB0aGUgdmlkZW8gZmlsZSBmcm9tIHRoZSBpbmNvbWluZyBmb3JtIGRhdGFcbiAgICAgIGNvbnN0IHZpZGVvID0gZmlsZXMudmlkZW87XG5cbiAgICAgIC8vIHJlYWQgdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlXG4gICAgICBjb25zdCBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyh2aWRlby5wYXRoKTtcblxuICAgICAgLy8gVXBsb2FkIHRoZSBmaWxlIHRvIFMzXG4gICAgICBjb25zdCBwdXRPYmplY3RQYXJhbXMgPSB7XG4gICAgICAgIEJ1Y2tldDogXCJldm0tcm9oaXQtbmV4dC1idWNrZXRcIixcbiAgICAgICAgS2V5OiB2aWRlby5uYW1lLFxuICAgICAgICBCb2R5OiBmaWxlQ29udGVudCxcbiAgICAgICAgQ29udGVudFR5cGU6IHZpZGVvLnR5cGUsXG4gICAgICB9O1xuICAgICAgYXdhaXQgczMucHV0T2JqZWN0KHB1dE9iamVjdFBhcmFtcykucHJvbWlzZSgpXG4gICAgICAgIC50aGVuKGFzeW5jKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBGaWxlIHVwbG9hZGVkIHRvIFMzOiAke3ZpZGVvLm5hbWV9ICgke3ZpZGVvLnR5cGV9KWApO1xuICAgICAgICAgIC8vIHNlbmQgYSBQT1NUIHJlcXVlc3QgdG8gdGhlIGVuZHBvaW50XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHBzOi8vYjk4OC0xMTctMjIwLTIxMS0xMTQubmdyb2stZnJlZS5hcHAvbG9jYWxub2RlXCIsIHtcbiAgICAgICAgICAgICAgc2hvdWxkVHJpZ2dlcjogdHJ1ZSwgLy8gcmVwbGFjZSB3aXRoIHlvdXIgYm9vbGVhbiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIlNlcnZlciBlcnJvclwiIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiBcIk1ldGhvZCBub3QgYWxsb3dlZFwiIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbIkFXUyIsImZvcm1pZGFibGUiLCJmcyIsImF4aW9zIiwiczMiLCJTMyIsInJlZ2lvbiIsImNyZWRlbnRpYWxzIiwiYWNjZXNzS2V5SWQiLCJwcm9jZXNzIiwiZW52IiwiUzNfQUNDRVNTX0tFWSIsInNlY3JldEFjY2Vzc0tleSIsIlMzX1NFQ1JFVF9BQ0NFU1NfS0VZIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJmb3JtIiwiSW5jb21pbmdGb3JtIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyIsImpzb24iLCJ2aWRlbyIsImZpbGVDb250ZW50IiwicmVhZEZpbGVTeW5jIiwicGF0aCIsInB1dE9iamVjdFBhcmFtcyIsIkJ1Y2tldCIsIktleSIsIm5hbWUiLCJCb2R5IiwiQ29udGVudFR5cGUiLCJ0eXBlIiwicHV0T2JqZWN0IiwicHJvbWlzZSIsInRoZW4iLCJsb2ciLCJyZXNwb25zZSIsInBvc3QiLCJzaG91bGRUcmlnZ2VyIiwiZGF0YSIsImNhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload.js\n");

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