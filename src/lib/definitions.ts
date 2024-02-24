export type CriteriaData = {
  order: number;
  description: string;
  met: boolean;
  value: number;
  valueLabel: string;
};

export type CriteriaResponse = {
  name: string;
  ticker: string;
  price: number;
  currency: string;
  criteria: CriteriaData[];
};
