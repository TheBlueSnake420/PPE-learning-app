import { StyleSheet, View } from 'react-native';

import { colors } from '@/theme';

interface Props {
  /** 0-1 */
  value: number;
  color?: string;
  height?: number;
}

export function ProgressBar({ value, color = colors.green, height = 14 }: Props) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <View style={[styles.track, { height, borderRadius: height / 2 }]}>
      {pct > 0 && (
        <View style={[styles.fill, { width: `${pct}%`, backgroundColor: color, borderRadius: height / 2 }]}>
          <View style={[styles.shine, { borderRadius: height / 4, height: height / 4, top: height / 5 }]} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // flexGrow (not flex: 1) so the bar fills a row but keeps its height in a column.
  track: {
    flexGrow: 1,
    flexShrink: 1,
    alignSelf: 'stretch',
    backgroundColor: colors.border,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
  shine: {
    position: 'absolute',
    left: 8,
    right: 8,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
});
