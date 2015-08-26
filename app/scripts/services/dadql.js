'use strict';

/**
 * @ngdoc service
 * @name timeOffApp.daDql
 * @description
 * # daDql
 * Factory in the timeOffApp.
 */
angular.module('timeOffApp')
  .factory('daDql', function () {
    var dql = {};

    dql.select = function(columns) {
      var i;
      var l = columns.length;
      var c = [];

      for (i = 0; i < l; i++) {
        c.push(columnExpr(columns[i]));
      }

      return c;
    };

    dql.sum = function(columns) {
      var i;
      var l = columns.length;
      var c = [];

      for (i = 0; i < l; i++) {
        c.push({
          exprType: 'FUNCTION',
          name: 'SUM',
          distinct: false,
          arguments: [
            columnExpr(columns[i])
          ]
        });
      }

      return c;
    };

    dql.aggregate = function(name, columns) {
      var i;
      var l = columns.length;
      var c = [];

      for (i = 0; i < l; i++) {
        c.push({
          exprType: 'FUNCTION',
          name: name,
          distinct: false,
          arguments: [
            columnExpr(columns[i])
          ]
        });
      }

      return c;
    };

    dql.groupBy = function(columns) {
      return dql.select(columns);
    };

    dql.orderBy = function(columns) {
      var i;
      var l = columns.length;
      var c = [];

      for (i = 0; i < l; i++) {
        c.push({
          order: columns[i].order,
          expression: columnExpr(columns[i].column)
        });
      }

      return c;
    };

    dql.where = function(columns) {
      var i;
      var l = columns.length;
      var filter;
      var expressions = [];
      var where = {
        'exprType': 'AND',
        'not': false
      };

      for (i = 0; i < l; i++) {
        filter = columns[i];

        switch (filter.type) {
        case 'between':
          expressions.push(betweenExpr(filter));
          break;
        case 'GREATER_THAN_OR_EQUAL_TO':
        case 'LESS_THAN_OR_EQUAL_TO':
        case 'GREATER_THAN':
        case 'LESS_THAN':
          expressions.push(rangeExpr(filter));
          break;
        default:
          expressions.push(inExpr(filter));
        }
      }

      insertExpr(expressions, where);

      return where;
    };

    dql.post = function(dataSource, q) {
      return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();

        req.open('POST', '/api/data/v2/datasources/' + dataSource + '/data');
        req.setRequestHeader('Content-Type', 'application/json');
        req.setRequestHeader('Data-Type', 'json');
        req.responseType = 'json';

        req.onload = function() {
          if (req.status === 200) {
            resolve(req.response.rows);
          } else {
            reject(new Error(req.statusText));
          }
        };

        req.onerror = function() {
          reject(new Error('Network Error'));
        };

        req.send(JSON.stringify({
          dataQuery: JSON.stringify(q)
        }));
      });
    };

    dql.postAll = function(posts) {
      return Promise.all(posts.map(function(post) {
        return dql.post(post.dataSourceId, post.query);
      }));
    };

    function columnExpr(col) {
      return {
        column: col,
        exprType: 'COLUMN'
      };
    }

    function valueExpr(val) {
      return {
        exprType: 'STRING_VALUE',
        value: val,
      };
    }

    function inExpr(filter) {
      return {
        exprType: 'IN',
        leftExpr: {
          column: filter.column,
          exprType: 'COLUMN'
        },
        selectSet: selectSetExprs(filter.values),
        not: false,
      };
    }

    function betweenExpr(filter) {
      return {
        exprType: 'BETWEEN',
        leftExpr: {
          column: filter.column,
          exprType: 'COLUMN'
        },
        betweenStart: {
          exprType: 'STRING_VALUE',
          value: String(filter.values[0])
        },
        betweenEnd: {
          exprType: 'STRING_VALUE',
          value: String(filter.values[1])
        },
        not: false
      };
    }

    function rangeExpr(filter) {
      return {
        exprType: filter.type,
        leftExpr: columnExpr(filter.column),
        rightExpr: valueExpr(filter.values[0])
      };
    }

    function selectSetExprs(values) {
      var i;
      var l = values.length;
      var c = [];

      for (i = 0; i < l; i++) {
        c.push(valueExpr(values[i]));
      }

      return c;
    }

    function insertExpr(exprs, node) {
      var leftExpr = exprs.pop();

      if (exprs.length === 0) {
        for (var p in leftExpr) {
          if (leftExpr.hasOwnProperty(p)) {
            node[p] = leftExpr[p];
          }
        }
      } else {
        node.leftExpr = leftExpr;
        node.rightExpr = {
          'exprType': 'AND',
          'not': false
	      };
	      insertExpr(exprs, node.rightExpr);
      }
    }

    return dql;
  });
