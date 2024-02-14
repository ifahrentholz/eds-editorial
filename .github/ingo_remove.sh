#!/bin/bash

grep -v -w "dist/*" ../.gitignore > tmpignore
mv tmpignore ../.gitignore