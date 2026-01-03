// นำรหัสจาก Supabase มาใส่ตรงนี้
const SUPABASE_URL = "https://gtofbbwbuvfwfbpoqkgd.supabase.co";
const SUPABASE_KEY = "sb_publishable_uF1FOizIETw1Mu9mRTIEAw_qBwButrJ";
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ฟังก์ชันดึงโลโก้จากตาราง Settings
async function loadLogo() {
    const { data } = await _supabase.from('settings').select('setting_value').eq('setting_key', 'logo_url').single();
    if (data) document.getElementById('main-logo').src = data.setting_value;
}
