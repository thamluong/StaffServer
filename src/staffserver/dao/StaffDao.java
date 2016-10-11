package staffserver.dao;

import java.util.List;

import staffserver.model.Company;
import staffserver.model.Staff;

public interface StaffDao {
	
	public void check();
	public List<Company> findAllCompanies();
	public List<Staff> findAll();
	public Staff findDetail(int id);
	/*public List<Staff> list();
	public List<Staff> listObjectStaff(String id);
	
	public void deleteStaff(String id);
	public int addStaff(Staff ct);
	public Staff detailStaff(String id);
	public void updateDb(List<Staff> staffs);
	public int isExisted(String name);*/
}
