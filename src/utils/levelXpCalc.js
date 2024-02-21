export const levelCalcSlow = (level) => (Math.pow(level, 3) * 5) / 4;

export const levelCalcMediumSlow = (level) => (Math.pow(level, 3) * 6) / 5 - 15 * Math.pow(level, 2) + level * 100 - 140;

export const levelCalcMediumFast = (level) => Math.pow(level, 3);

export const levelCalcFast = (level) => (Math.pow(level, 3) * 4) / 5;
