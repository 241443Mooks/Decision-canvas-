export type Kind = 'question' | 'option' | 'evidence' | 'constraint' | 'action';
export type Relation = 'supports' | 'challenges' | 'depends on';
export interface Card { id:string; kind:Kind; title:string; notes:string; position:{x:number;y:number} }
export interface Link { id:string; source:string; target:string; relation:Relation }
export interface Board { version:1; viewport:{x:number;y:number;zoom:number}; cards:Card[]; connections:Link[] }
