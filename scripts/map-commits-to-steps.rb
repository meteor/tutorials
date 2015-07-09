#! /usr/bin/env ruby

require 'json'

# Goal: go through a repository, parse titles of the form:
# Step 8.2: Step content
# 
# Generate a dictionary where the keys are step numbers,
# and the values are the title of the commit and the sha of the commit
# 
# Output a file with VAR_NAME = <JSON blob> that can be included in this
# package

# Usage: ./map-commits-to-steps.rb <repo path> <output path> <var name>

# Methodology: calls git log and parses output

if ARGV.length < 3
  puts "Please pass the path to a Git repository, \
an output file, and a variable name"
  exit 1
end

out_file = File.join Dir.pwd, ARGV[1]

Dir.chdir ARGV[0]

log_output = `git log --pretty=oneline`

hash = {}

log_output.each_line do |line|
  parts = line.split
  sha = parts[0]
  maybe_step = parts[1]
  if maybe_step == "Step"
    step_number = parts[2].sub ":", ""
    message = parts.drop(3).join " "
    puts "sha: " + sha
    puts "step: " + step_number
    puts "message: " + message

    hash[step_number] = {
      "sha" => sha,
      "message" => message
    }
  end
end

File.open out_file, "w" do |file|
  file.write(ARGV[2] + " = " + JSON.pretty_generate(hash))
end
