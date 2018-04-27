package lrexternal

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

abstract class LRExternalSimulation extends Simulation {

  val endPoint = "http://172.250.200.4"   // change endPoint to targeting one
  val queryDate = "2018-03-08"            // change date as appropriate

  var httpConf = http
    .baseURL(endPoint)  
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")

  def requestScenario(hotelIds: String) = 
    scenario(s"LRExternal, being asked for hotel info")
      .exec(http("GET")
        .get(s"/query/hotels?sDate=$queryDate&data=product_info,rates&cur=GBP&adults=2&children=0&nights=1&ids=$hotelIds")
        )
      .pause(1 seconds)
}

class ConstRequestsPerSecond extends LRExternalSimulation {
  val requestRate = Integer.getInteger("requestRate", 5).toDouble
  val hotelCount = Integer.getInteger("hotelCount", 5)
  val duration = Integer.getInteger("duration", 30).toDouble

  // cherry pick up IDs as required by different scenario
  var hotelIds = "202504,201726,194204,186004,206831"
  hotelIds = hotelIds + ",284396,97157,153620,95486,3896"

  setUp(
    requestScenario(hotelIds)
      .inject(
        constantUsersPerSec(requestRate) during(duration seconds)
      )      
    ).protocols(httpConf)
}

