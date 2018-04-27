#!/bin/bash -ex

# GATLING_HOME needs to be set to where Gatling is installed!!!
# e.g. GATLING_HOME=/mnt/c/apps/gatling-charts-highcharts-bundle-2.3.0 ./lrexternal-gatling.sh

currPath=$(pwd)
pushd $GATLING_HOME/bin
trap popd ERR

main() {
#	run 2 2 40	#Passed
	run 2 4 40	#Crucial point
#	run 2 5 40	#Failed
#	run 5 1 40	#Passed
#	run 5 2 40	#Failed
#	run 5 5 40
#	run 5 9 40
#	run 5 10 40
#	run 5 20 40
#	run 5 40 40
#	run 5 60 40
#	run 5 50 40
#	run 5 100 40
}

run() {
  JAVA_OPTS="-DrequestRate=$1 -DhotelCount=$2 -Dduration=$3" \
	./gatling.sh \
		--output-name sync-h$2-r$1-t$3 \
		--run-description blah \
		--simulation lrexternal.ConstRequestsPerSecond \
		--simulations-folder $currPath/simulations \
		--results-folder $currPath/results \
		--binaries-folder $currPath/targets \
		--bodies-folder $currPath/bodies \
		--data-folder $currPath/data
}

main
