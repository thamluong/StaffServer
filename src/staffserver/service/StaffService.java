package staffserver.service;

import java.util.List;

import staffserver.model.StaffClient;
import staffserver.model.Company;
import staffserver.model.Staff;

public interface StaffService {
	
	public void check();
	public List<Company> getAllCompanies();
	public List<Staff> getAll();
	public Staff getDetail(int id);
	public void delete(String id);
	public List<Staff> getStaffsByCompany(int id);

	public void insertOrUpdateToDb(List<StaffClient> staffs);
	public int isExisted(String name, String info);
}
