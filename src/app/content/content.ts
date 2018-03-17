export class Content {
  constructor(
   public barcode?: string,
   public program?: string,
   public episode?: number,
   public sp_status?: string,
   public sp_notes: string = 'http://',
   public edit_status?: string,
   public ingest_status?: string,
   public qc_status?: string,
   public qc_notes?: string,
   public updated_at?: string
  ) {}
}