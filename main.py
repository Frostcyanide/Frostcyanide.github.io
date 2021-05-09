# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

import pandas_datareader.data as web

import pandas as pd

from datetime import datetime

import matplotlib.pyplot as plt


df = web.DataReader('GE', 'yahoo', start='2021-01-01', end='2021-04-29')

print(df)

plt.figure()
plt.plot(df)
plt.show()

