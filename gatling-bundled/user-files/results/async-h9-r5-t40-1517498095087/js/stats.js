var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5022",
        "ok": "5022",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12525",
        "ok": "12525",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6861",
        "ok": "6861",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1866",
        "ok": "1866",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6062",
        "ok": "6062",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8259",
        "ok": "8259",
        "ko": "-"
    },
    "percentiles3": {
        "total": "10732",
        "ok": "10732",
        "ko": "-"
    },
    "percentiles4": {
        "total": "12104",
        "ok": "12104",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 200,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.774",
        "ok": "3.774",
        "ko": "-"
    }
},
contents: {
"req_get-75280": {
        type: "REQUEST",
        name: "GET",
path: "GET",
pathFormatted: "req_get-75280",
stats: {
    "name": "GET",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5022",
        "ok": "5022",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12525",
        "ok": "12525",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6861",
        "ok": "6861",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1866",
        "ok": "1866",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6062",
        "ok": "6062",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8259",
        "ok": "8259",
        "ko": "-"
    },
    "percentiles3": {
        "total": "10732",
        "ok": "10732",
        "ko": "-"
    },
    "percentiles4": {
        "total": "12104",
        "ok": "12104",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 200,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.774",
        "ok": "3.774",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
