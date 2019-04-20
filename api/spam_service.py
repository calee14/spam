import pickle
from tensorflow.keras.models import Model
from tensorflow.keras.layers import LSTM, Activation, Dense, Dropout, Input, Embedding
from tensorflow.keras.optimizers import RMSprop
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing import sequence
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.callbacks import EarlyStopping
from tensorflow.keras.models import load_model

class spam_service(object):
    def __init__(self):
        self.max_len = 150
        # load the model
        self.model = load_model('spam_detector.hdf5')
        # loading the tokenizer
        with open('tok.pkl', 'rb') as handle:
            self.tok = pickle.load(handle)
    def predict(self, text):
        '''
        Params: String[]
        Returns: Double
        '''
        seq = self.tok.texts_to_sequences(text)
        seq = sequence.pad_sequences(seq,maxlen=self.max_len)
        result = self.model.predict(seq)
        return result

s = spam_service()
print(s.predict(['Hello World']))
