export type CriteriaData = {
  order: number;
  description: string;
  met: boolean;
  value: number;
  valueLabel: string;
};

export type CriteriaResponse = {
  ticker: string;
  price: number;
  criteria: CriteriaData[];
};
