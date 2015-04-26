
// Crawls facebook looking for Amanhecer events and ouputs a json document.

'use strict';

var async = require('async')
var request = require('request')
var bunyan = require('bunyan')
var colors = require('colors')
var _ = require('lodash')

var logger = bunyan.createLogger({
  name: 'Crawler',
  level: 'debug',
})

function makeFbRequest (path, query, cb) {
  logger.trace('Reaching path '+path, { query: query })

  return request.get(
    { url: 'https://graph.facebook.com/'+path, json: true, qs: query },
    function (err, res, body) {
      if (err) {
        logger.error('failed to reach '+path, res)
        cb(err, body, res)
        return
      }
      // logger.info('response (from path '+path+')', res)
      cb(null, body, res)
    }
  )
}

var Q = 'amanhecer+contra+maioridade+penal'

function requestAmanhecerEvents (at, cb) {

  function getEventIds(cb) {
    makeFbRequest('search', {
      type: 'event',
      q: Q,
      // fields: 'id,name,start_time,timezone,location,venue,description',
      fields: 'id,name,location',
      access_token: at,
    }, function (err, data, res) {
      if (err) {
        return cb(err)
      }

      if (res.statusCode !== 200) {
        logger.warn('Ops! Status code is '+res.statusCode)
        logger.info(data)
        logger.error('I don\'t know what to do. Bye bye.')
        process.exit(0)
      }

      cb(null, data.data)
    })
  }

  function getEvent(edata, cb) {
    var id = edata.id
    makeFbRequest(id, { metadata: 1, access_token: at, },
    function (err, res, body) {
      if (err) {
        return cb(err)
      }
      makeFbRequest(id+'/attending', { summary: 1, access_token: at },
      function (err2, res2, countBody) {
        var count = countBody && countBody.summary && countBody.summary.count
        cb(null, _.extend(body, { count: count }))
      })
    })
  }

  getEventIds(function (err, _events) {
    if (err) {
      return cb(err)
    }

    var events = _.filter(_events, function (event) {
      if (!event.location) {
        return true
      } else {
        logger.trace('Event '+event.name+' doesn\'t have a location. Too bad.')
        return false
      }
    })

    async.map(events, getEvent, function (err, results) {

    })
  })
}

function main () {
  function input (cb) {
    var stdin = process.openStdin()
    stdin.once('data', function (chunk) {
      cb(chunk.toString())
    })
  }

  var at = 'CAAL1nzNXZAScBAPO2WSGsC1z6tiAXNcM2Y0YzErV6IZCEq298ZCZAGcuvip5lZAjwGDz1Sqg60D94ZAC2Sob6dXiY2zeZCKGZAPEdaBA5LGG7w5aCrS5rJbzfaHPTnZA3ESvDMmiCTKq2jYGMCLuIX4QRBiZAfXh34ASIPnVnOC8s8aTqNpphACpYr2ZByl4yidRTgogZAozcL8o17oZBpIsPv0uqLXaMIDVB0ZC4ZD'

  // console.log('Enter a user access token: ')
  // input(function (at) {
    requestAmanhecerEvents(at, function (err, events) {
      if (err) {
        logger.error('Damn!', err)
        return
      }
      console.log(JSON.stringify(events, null, 2))
    })
  // })
}

if (require.main === module) {
  main()
}