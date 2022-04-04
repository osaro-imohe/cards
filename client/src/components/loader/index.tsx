import { LoaderProps } from '../../types/components';
import styles from '../../styles.module.css';

const LoaderLight = ({ width, height, center } : LoaderProps) => (
  <div
    className={styles.lds_ring_light}
    style={center ? {
      width: `${width}px`, height: `${height}px`, left: '0', right: '0', margin: 'auto', top: '0', bottom: '0',
    } : { width: `${width}px`, height: `${height}px` }}
  >
    <div style={{
      margin: `${width / 10}px`, width: `${width * 0.80}px`, height: `${height * 0.80}px`, border: `${width / 10}px solid purple`,
    }}
    />
    <div style={{
      margin: `${width / 10}px`, width: `${width * 0.80}px`, height: `${height * 0.80}px`, border: `${width / 10}px solid purple`,
    }}
    />
    <div
      style={{
        margin: `${width / 10}px`, width: `${width * 0.80}px`, height: `${height * 0.80}px`, border: `${width / 10}px solid purple`,
      }}
    />
    <div style={{
      margin: `${width / 10}px`, width: `${width * 0.80}px`, height: `${height * 0.80}px`, border: `${width / 10}px solid purple`,
    }}
    />
  </div>
);

const LoaderDark = ({ width, height, center } : LoaderProps) => (
  <div
    className={styles.lds_ring_dark}
    style={center ? {
      width: `${width}px`, height: `${height}px`, left: '0', right: '0', margin: 'auto', top: '0', bottom: '0',
    } : { width: `${width}px`, height: `${height}px` }}
  >
    <div style={{
      margin: `${width / 10}px`, width: `${width * 0.80}px`, height: `${height * 0.80}px`, border: `${width / 10}px solid purple`,
    }}
    />
    <div style={{
      margin: `${width / 10}px`, width: `${width * 0.80}px`, height: `${height * 0.80}px`, border: `${width / 10}px solid purple`,
    }}
    />
    <div
      style={{
        margin: `${width / 10}px`, width: `${width * 0.80}px`, height: `${height * 0.80}px`, border: `${width / 10}px solid purple`,
      }}
    />
    <div style={{
      margin: `${width / 10}px`, width: `${width * 0.80}px`, height: `${height * 0.80}px`, border: `${width / 10}px solid purple`,
    }}
    />
  </div>
);

export {LoaderDark, LoaderLight};