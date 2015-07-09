#! /usr/bin/env ruby

# Goal: go through a repository, parse titles of the form:
# Step 8.2: Step content
# 
# Generate a dictionary where the keys are step numbers,
# and the values are the title of the commit and the sha of the commit
# 
# Next step: somehow put that code into the package...

# Usage: ./map-commits-to-steps.rb <repo path>

# Methodology: calls git log and parses output

if ARGV.length < 1
  puts "Please pass the path to a Git repository"
end

Dir.chdir ARGV[0]

log_output = `git log --pretty=oneline`

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
  end
end

