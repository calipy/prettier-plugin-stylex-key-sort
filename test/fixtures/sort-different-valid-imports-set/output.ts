import stylex from 'stlx';
import { keyframes as kf } from 'stlx';
const styles = stylex.create({
  foo: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    borderColor: 'red',
  },
});
const keyframes = kf({
  '0%': {
    display: 'flex',
    alignItems: 'center',
    borderColor: 'red',
  },
});
