var assert = require('assert');
var esprima = require('esprima');
var util = require('../serverHelpers/utility.js');
var OutputNode =  require('../serverHelpers/outputnode.js');
var parser = require('../serverHelpers/parser.js');
var fs = require('fs');

describe('ast parsing functionality', function() {

  var rootNode, nodeMap, outputObject;
  beforeEach(function() {
    rootNode = esprima.parse(reqBodyCodeString);
    nodeMap = util.findAllFunctionNodes(rootNode);
    outputObject = new OutputNode();
    parser.parseASTRecursively(rootNode, nodeMap, outputObject);
    outputObject.formatOutput();
  });

  describe('local variable declarations', function() {

    it('should return the string value', function() {
      assert.equal(outputObject.__localVariables__.firsString, 'valueheregoesitdoes');
    });

  });
});