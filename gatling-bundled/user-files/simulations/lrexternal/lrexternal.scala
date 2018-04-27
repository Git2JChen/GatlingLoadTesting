package lrexternal

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

abstract class LRExternalSimulation extends Simulation {

  val httpConf = http
    .baseURL("http://172.250.200.4")  //change url to targeting endpoint
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")

  def requestScenario(hotelIds: String) = 
    scenario(s"LRExternal, being asked for hotel info")
      .exec(http("GET")
        .get(s"/query/hotels?sDate=2018-02-02&data=product_info,rates&cur=GBP&adults=2&children=0&nights=1&ids=$hotelIds")
        )
      .pause(1 seconds)

}


class ConstRequestsPerSecond extends LRExternalSimulation {
  val requestRate = Integer.getInteger("requestRate", 5).toDouble
  val hotelCount = Integer.getInteger("hotelCount", 5)
  val duration = Integer.getInteger("duration", 30).toDouble

  // cherry pick up IDs as required by different scenario: data were manually extracted from live Kibana of Xmlfeeds
  //var hotelIds = "253009,193859,194820,194821,194824,179727,220086,218230,183971"
  //var hotelIds = "253009,193859,194820,194821,194824,179727,220086,218230,183971,253009,193859,194820,194821,194824,179727,220086,218230,183971"
  //var hotelIds = "253009,193859,194820,194821,194824,179727,220086,218230,183971,253009,193859,194820,194821,194824,179727,220086,218230,183971"
  //hotelIds = hotelIds + ",100649,99936,99169,189180,100041,99947,98242,189315,88025,86381,275940,231717,69840,290661,156602,95315,147430,274680,98540,92163"
  
  //hotelIds = hotelIds + ",209046,198204,208537,165789,206833,194933,207217,213754,164820,165651,201717,
  
  
  var hotelIds = "202504,201726,194204,186004"  //,206831"
  //hotelIds = hotelIds + ",284396,97157,153620,95486,3896,268041"
  //
  //hotelIds = hotelIds + ",178755,124908,148240,124862,202829,205510,226932,244783,142763,245017,244867,239808,253416,2643"
  //hotelIds = hotelIds + ",93223,92265,92244,198350,217200,92514,217551,255210,94563,285628,277121,490373,280930,194402,83475"
  //hotelIds = hotelIds + ",180613,158237,253872,245153,225349,197156,94110,299245,145806,209813,196421"


  setUp(
    requestScenario(hotelIds)
      .inject(
        constantUsersPerSec(requestRate) during(duration seconds)
      )      
    ).protocols(httpConf)
}


class GetRatesSimulation extends Simulation {

  // users for requests: 5, 20, 50

  val httpConf = http
    .baseURL("http://lrexternal.local") // Here is the root for all relative URLs
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") // Here are the common headers
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  val headers_10 = Map("Content-Type" -> "application/json") // Note the headers specific to a given request

  val scn = scenario("Request 5 hotels in one request") // A scenario is a chain of requests and pauses
    .exec(http("Asking for rates")
      .get("/query/hotels?sDate=2018-02-02&data=product_info,rates&cur=GBP&adults=2&children=0&nights=1&ids=109,111,112,119,120&lang=en"))
  setUp(scn.inject(constantUsersPerSec(20) during(120 seconds)).protocols(httpConf))
}

