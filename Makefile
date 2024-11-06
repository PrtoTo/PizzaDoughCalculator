# Makefile for running pizza.ts with dynamic arguments

# Variables
SRC_DIR = src
BUILD_DIR = dist
SRC_FILE = $(SRC_DIR)/pizza.ts
BUILD_FILE = $(BUILD_DIR)/pizza.js
TS_CONFIG = tsconfig.json

# Default values for arguments (can be overridden)
ARG1 = 2
ARG2 = Yeast

# Default target to build and run
.PHONY: all
all: build run

# Compile TypeScript code
build: $(BUILD_FILE)

$(BUILD_FILE): $(SRC_FILE) $(TS_CONFIG)
	@mkdir -p $(BUILD_DIR)
	@tsc --project $(TS_CONFIG)

# Run the compiled JavaScript with Node.js, passing arguments to the script
run: $(BUILD_FILE)
	@node $(BUILD_FILE) $(ARG1) $(ARG2)

# Clean the build directory
.PHONY: clean
clean:
	@rm -rf $(BUILD_DIR)

# Allow overriding ARG1 and ARG2 from the command line
.PHONY: run-custom
run-custom: $(BUILD_FILE)
	@node $(BUILD_FILE) $(ARG1) $(ARG2)
