#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n com.fcos.Project/host.exp.exponent.MainActivity
