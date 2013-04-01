<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->view('roulette');
	}
        
        public function ajax_save_webcam_capture()
        {
            $dir_path = create_chat_session_directory();
            $str = file_get_contents("php://input");
            file_put_contents($dir_path . '/capture.jpg', pack("H*", $str));
        }
        
        public function ajax_chat_log()
        {
            log_chat_message($this->input->post('name'), $this->input->post('message'));
        }
        
        public function ajax_get_conversation($who = '')
        {
            if(!in_array($who, array('jeanfrancois', 'pascal', 'code18', 'mathieu'))){
                $who = '';
            }
			
			log_chat_start($who);
            
            $answers = array();
            $queries = array(
                "SELECT * FROM answers WHERE category = 'salutation' AND (owner_name IS NULL OR owner_name = '$who') ORDER BY random() LIMIT 1",
                "SELECT * FROM answers WHERE category = 'asv' AND (owner_name IS NULL OR owner_name = '$who') ORDER BY random() LIMIT 1",
                "SELECT * FROM answers WHERE category = 'post-asv' AND (owner_name IS NULL OR owner_name = '$who') ORDER BY random() LIMIT 1",
                "SELECT * FROM answers WHERE category = 'presentation' AND (owner_name IS NULL OR owner_name = '$who') ORDER BY random() LIMIT 1",
                "SELECT * FROM answers WHERE category = 'intro' AND (owner_name IS NULL OR owner_name = '$who') ORDER BY random() LIMIT 1",
                "SELECT * FROM answers WHERE category = 'smalltalk' AND (owner_name IS NULL OR owner_name = '$who') ORDER BY RANDOM() LIMIT 5 + ABS(RANDOM())%5",
                "SELECT * FROM answers WHERE category = 'plug' AND (owner_name IS NULL OR owner_name = '$who') ORDER BY random() LIMIT 1",
                "SELECT * FROM answers WHERE category = 'conclusion' AND (owner_name IS NULL OR owner_name = '$who') ORDER BY random() LIMIT 1",
            );
            
            foreach($queries as $sql){
                $query = $this->db->query($sql);
                foreach($query->result('array') as $row){
                    $answers[] = $row['answer_text'];
                }
            }
            
            echo json_encode($answers);
        }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */