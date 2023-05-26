export default interface Training {
  id: number;
  title: string;
  sub_title: string;
  inter_training_costs: number;
  in_house_training_costs: number;
  inter_exam_costs: number;
  in_house_exam_costs: number;
  category: string;
  simulateur_id: string;
  total_exam_success: number;
  total_failed_exam: number;
  user_id?: number;
  created_at?: string;
  updated_at?: string;
} 