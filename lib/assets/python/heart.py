from youtube_transcript_api import YouTubeTranscriptApi
import json
import sys
import collections
import re

video_id = sys.argv[1]
transcript = YouTubeTranscriptApi.get_transcript(video_id)
length = len(transcript)
i = 0
words = ""

while i < length:
    addition = transcript[i]['text']
    if addition != "[Music]":
        words += addition
    if i < length-1:
        words += " "
    i += 1

word_list = list(words.split(" "))
#===This is where I would be passing into Ruby...===
#print(word_list)
#puts word_list.inspect

word_frequency = {}

for word in word_list:
    if word in word_frequency:
        word_frequency[word] += 1
    else:
        word_frequency[word] = 1

#Note: sorted converts map to list. We now have a list of tuples of str, int
sorted_word_frequency = sorted(word_frequency.items(), key=lambda x: x[1], reverse=True)
#convert back to a map
word_frequency = collections.OrderedDict(sorted_word_frequency)
#remove punctuation?
punc = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
for key in word_frequency:
    for i in key:
        if i in punc:
            key = key.replace(i, "")
#print(type(sorted_word_frequency[1][0]))
test = json.dumps(word_frequency)
print(test)
#puts sorted_word_frequency

#=====================YouTube dl tutorial==================
# import youtube_dl

# def download_subs(url, lang="en"):
#     opts = {
#         "skip_download": True,
#         "writesubtitles": "%(name)s.vtt",
#         "subtitlelangs": lang
#     }

#     with youtube_dl.YoutubeDL(opts) as yt:
#         yt.download([url])

# url = "https://www.youtube.com/watch?v=pMKsed-y744"
# download_subs(url)



#================Python in Ruby tutorial=======================
# import sys

# input = sys.argv[1]
# print(input + " is")