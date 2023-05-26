export default interface Session {
  id: number;
  city: string;
  country: string;
  inter_training_costs: number;
  in_house_training_costs: number;
  inter_exam_costs: number;
  in_house_exam_costs: number;
  start_date: string;
  end_date: string;
  start: string;
  end: string;
  registration_fee: number;
  session_format?: string;
  training_id?: number;
  user_id?: number;
  status?: "EN_COURS"|"TERMINER"|"PROGRAMMER"|"ANNULER";
  active?: boolean;
  index?: number;
  created_at?: string;
  updated_at?: string;
}
