'use strict';

function saveFile(projectsDirectoryPath, file, callback) {
  file.save(projectsDirectoryPath);

  var success = true; ///

  callback(success);
}

module.exports = saveFile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zYXZlRmlsZS5qcyJdLCJuYW1lcyI6WyJzYXZlRmlsZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImZpbGUiLCJjYWxsYmFjayIsInNhdmUiLCJzdWNjZXNzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMscUJBQWxCLEVBQXlDQyxJQUF6QyxFQUErQ0MsUUFBL0MsRUFBeUQ7QUFDdkRELE9BQUtFLElBQUwsQ0FBVUgscUJBQVY7O0FBRUEsTUFBTUksVUFBVSxJQUFoQixDQUh1RCxDQUdqQzs7QUFFdEJGLFdBQVNFLE9BQVQ7QUFDRDs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQlAsUUFBakIiLCJmaWxlIjoic2F2ZUZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHNhdmVGaWxlKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZmlsZSwgY2FsbGJhY2spIHtcbiAgZmlsZS5zYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgY29uc3Qgc3VjY2VzcyA9IHRydWU7IC8vL1xuXG4gIGNhbGxiYWNrKHN1Y2Nlc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNhdmVGaWxlO1xuIl19