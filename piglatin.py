pyg = 'ay'

original = raw_input('Enter a word: ')

if len(original) > 0 and original.isalpha():
  word = original.lower()
  first = original[0]
  new_word = word[1:len(new_word)] + first + pyg
  print new_word
else:
  print 'Invalid input, please try again.'
