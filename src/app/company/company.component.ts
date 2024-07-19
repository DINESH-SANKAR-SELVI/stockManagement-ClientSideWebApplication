import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyType } from '../data-types';
import { ApiService } from '../api.service';
import { MatDialog } from '@angular/material/dialog';
import { CompanyFactoryComponent } from '../company-factory/company-factory.component';
import { SnackbarService } from '../snackbar.service';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit, AfterViewInit {

    source : CompanyType[]=[];

    displayedColumns: string[] = ['companyDescription', 'ceo', 'email', 'status', 'action'];
    dataSource!: MatTableDataSource<CompanyType>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(
        private apiService: ApiService,
        private dialog: MatDialog,
        private snackBar: SnackbarService
    ) {
        
    }

    ngOnInit(): void {    
        this.findAllCompanyToTable();
    }

    findAllCompanyToTable() {
        this.apiService.getAllCompanys().subscribe(result => {
            this.source=result;
            this.dataSource = new MatTableDataSource(result);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }, (error) => {
            console.warn(error);
        });
    }
    openCompanyFactory(createOrUpdate: boolean) {
        const dialogRef = this.dialog.open(CompanyFactoryComponent, {
            data: {
              createOrUpdate: createOrUpdate,
            },
          });

        dialogRef.afterClosed().subscribe(result => {
            this.newCompanyFactory(result);
        });
    }

    newCompanyFactory(data: CompanyType) {
        this.apiService.newCompanyFactory(data).subscribe(result=> {
            this.source.push(result);
            this.dataSource = new MatTableDataSource(this.source);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;

            this.snackBar.openSnackBar("Company Created..!");
        });
    }

    ngAfterViewInit() {
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}