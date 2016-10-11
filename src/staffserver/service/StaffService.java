package staffserver.service;

import java.util.List;

import staffserver.model.Company;
import staffserver.model.Staff;

public interface StaffService {
	
	public void check();
	public List<Company> getAllCompanies();
	public List<Staff> getAll();
	public Staff getDetail(int id);
}
