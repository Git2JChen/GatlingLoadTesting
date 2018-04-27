#!/bin/bash -ex

# GATLING_HOME needs to be set to where Gatling is installed
# e.g. GATLING_HOME=/mnt/c/apps/gatling-charts-highcharts-bundle-2.3.0 ./lrexternal-gatling.sh

export GATLING_HOME=~/apps/gatling-bundled
currPath=$(pwd)
pushd $GATLING_HOME/bin
trap popd ERR

main() {

	run 5 10 40	
	
	# == Load Simulation Note ==
	# 5 :- 5 users during test
	# 10 :- 10 hotel IDs sent in a single request
	# 40 :- 40 seconds duration for load to sustain during test
}

run() {
  JAVA_OPTS="-DrequestRate=$1 -DhotelCount=$2 -Dduration=$3" \
	./gatling.sh \
		--output-name async-TEST-h$2-r$1-t$3 \				# concatinating output folder name using parameters
		--run-description blah \
		--simulation lrexternal.ConstRequestsPerSecond \	# referring to scala class in simulation
		--simulations-folder $currPath/simulations \		# specifying simulation location
		--results-folder $currPath/results \				# specifying test result location
		--binaries-folder $currPath/targets \				# specifying Gatling binary location
		--bodies-folder $currPath/bodies \					# specifying Gatling internal location
		--data-folder $currPath/data						# specifying internal data location
}

main
